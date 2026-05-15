import { useRef, useState, useEffect } from "react";

export default function DesktopUI() {

    const desktopRef = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState(0);
    const [folders, setFolders] = useState<any[]>([]);
    const [selectedFolder, setSelectedFolder] = useState<number | null>(null);

    useEffect(() => {
        async function fetchFolders() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/desktop/folders`)
            const folders = await res.json();
            setFolders(folders);
        }
        fetchFolders();
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

    const selectFolder = (id: number | null) => {
        setSelectedFolder(id);
    }
    const [desktopHeight, setDesktopHeight] = useState(0);
    const cellSize = 90;
    const gap = 12;
    return (
        <div className="w-screen h-screen m-0 p-0 relative overflow-hidden">
            {/* Desktop Background */}
            <div className="flex absolute w-screen h-screen m-0 p-0 z-0">
                <img src="/BG2.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col relative w-screen h-screen m-0 p-0">
                {/* Toolbar */}
                <div className="flex w-screen h-10 top-0 backdrop-blur-[50px] bg-black/40 place-content-between items-center px-4 justify-center gap-4">
                    <div className="flex">May 20, 2026</div>
                    <div className="flex">10:36 AM</div>
                </div>

                {/* Desktop */}
                <div
                    onClick={() => selectFolder(null)}
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
                            <div onClick={(e) => { e.stopPropagation(); selectFolder(folder.id); }} key={folder.id} className={`flex flex-col items-center justify-center hover:bg-gray-900/10 hover:border border-[#ffffff40] hover:backdrop-blur-lg rounded-lg px-3 ${selectedFolder === folder.id ? 'bg-gray-900/20 border border-[#ffffff40] backdrop-blur-lg' : ''} `}>
                                {/* Icon */}
                                <div className="flex w-15 h-auto">
                                    <img src={`${folder.empty ? '/Icons/FolderEmpty.png' : '/Icons/FolderWithFiles.png'}`} alt="" className="w-full h-full object-cover" />
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
                <div className="self-center absolute bottom-5 w-130 h-18 mb-5 rounded-xl backdrop-blur-3xl bg-gray-500/10 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"></div>

            </div>
        </div>
    )
}