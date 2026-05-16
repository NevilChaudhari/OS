import { useRef, useState, useEffect } from "react";
import SelectionBoxUI from "../components/selectionBoxUI";
import dayjs from "dayjs";

export default function DesktopUI() {

    const gap = 12;
    const cellSize = 90;
    const desktopRef = useRef<HTMLDivElement | null>(null);
    const now = dayjs();
    const [desktopHeight, setDesktopHeight] = useState(0);
    const [rows, setRows] = useState(0);
    const [folders, setFolders] = useState<any[]>([]);
    const [taskbarApps, setTaskbarApps] = useState<any[]>([]);
    const [selectedFolder, setSelectedFolder] = useState<(number | null)[]>([]);

    useEffect(() => {
        async function fetchFolders() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/desktop/folders`)
            const folders = await res.json();
            setFolders(folders);
        }
        async function fetchTaskbarApps() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/taskbar/apps`)
            const apps = await res.json();
            setTaskbarApps(apps);
        }
        fetchFolders();
        fetchTaskbarApps();
    }, [])

    useEffect(() => {
        const updateLayout = () => {
            if (desktopRef.current) {
                const height = window.innerHeight - 40 - 80;

                setDesktopHeight(height);

                setRows(
                    Math.floor(height / (cellSize + gap))
                );
            }
        };

        updateLayout();

        window.addEventListener("resize", updateLayout);

        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    const selectFolder = (id: number | null, e: React.MouseEvent<HTMLDivElement>) => {
        if (e.ctrlKey) {
            if (selectedFolder.includes(id)) {
                setSelectedFolder((prev) => prev.filter((item) => item !== id));
            } else {
                e.preventDefault();
                setSelectedFolder((prev) => [...prev, id]);
            }
        } else {
            setSelectedFolder([id]);
        }
    };

    return (
        <div className="w-screen h-screen m-0 p-0 relative overflow-hidden">

            {/* <div className="absolute w-screen h-screen m-0 p-0 z-10 pointer-events-none">
                <SelectionBoxUI />
            </div> */}

            {/* Desktop Background */}
            <div className="flex absolute w-screen h-screen m-0 p-0 z-0">
                <img src="/BG2.png" alt="Desktop Background" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col relative w-screen h-screen m-0 p-0">
                {/* Toolbar */}
                <div className="flex w-screen h-10 top-0 backdrop-blur-[50px] bg-black/40 place-content-between items-center px-4 justify-center gap-4">
                    <div className="flex">{now.format("MMM DD, YYYY")}</div>
                    <div className="flex">{now.format("hh:mm A")}</div>
                </div>

                {/* Desktop */}
                <div
                    onClick={(e) => selectFolder(null, e)}
                    ref={desktopRef}
                    style={{
                        height: desktopHeight,
                        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`
                    }}
                    className="grid grid-flow-col auto-cols-[90px] auto-rows-[90px] gap-3 p-4 overflow-hidden"
                >

                    {/* Files */}
                    {folders.map((folder) => {
                        return (
                            <div onClick={(e) => { e.stopPropagation(); selectFolder(folder.id, e); }} key={folder.id} className={`flex flex-col items-center justify-center hover:bg-gray-900/10 hover:border border-[#ffffff40] hover:backdrop-blur-lg rounded-lg px-3 ${selectedFolder.includes(folder.id) ? 'bg-gray-900/20 border border-[#ffffff40] backdrop-blur-lg' : ''} `}>
                                {/* Icon */}
                                <div className="flex w-15 h-auto">
                                    <img src={`${folder.empty ? '/Icons/FolderEmpty.png' : '/Icons/FolderWithFiles.png'}`} alt={folder.name} className="w-full h-full object-cover" />
                                </div>
                                {/* Name */}
                                <div className="w-full text-xs text-center text-white truncate">
                                    {folder.name}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Taskbar */}
                <div className="self-center absolute items-center flex gap-5 px-2 bottom-3 w-auto h-18 rounded-xl backdrop-blur-3xl bg-gray-500/10 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    {taskbarApps.map((app) => {
                        return (
                            <div key={app.id} className="flex flex-col items-center justify-center gap-1">
                                <div className="flex w-9 h-9 hover:w-12 hover:h-12 hover:-translate-y-2 transition-all duration-100">
                                    <img src="/Icons/FileManager.png" alt="File Manager" className="w-full h-full object-cover" />
                                </div>
                                {/* <div className="bg-blue-400 w-[80%] h-1 rounded-full" /> */}
                                {/* <div className="bg-blue-400 w-3 h-1 rounded-full" /> */}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}