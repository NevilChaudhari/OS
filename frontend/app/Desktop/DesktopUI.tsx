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
        const updateRows = () => {
            if (desktopRef.current) {
                setRows(
                    Math.floor(desktopRef.current.clientHeight / 90)
                );
            }
        };

        updateRows();

        window.addEventListener("resize", updateRows);

        return () => window.removeEventListener("resize", updateRows);
    }, []);

    const selectFolder = (id: number | null) => {
        setSelectedFolder(id);
    }
    return (
        <div className="w-screen h-screen m-0 p-0 relative overflow-hidden">
            {/* Desktop Background */}
            <div className="flex absolute w-screen h-screen m-0 p-0 z-0">
                <img src="/BG.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col relative w-screen h-screen m-0 p-0">
                {/* Toolbar */}
                <div className="flex w-screen h-10 top-0 backdrop-blur-[50px] bg-black/60 place-content-between items-center px-4 justify-center gap-4">
                    <div className="flex">May 20, 2026</div>
                    <div className="flex">10:36 AM</div>
                </div>

                {/* Desktop */}
                <div
                    onClick={() => selectFolder(null)}
                    ref={desktopRef}
                    style={{
                        gridTemplateRows: `repeat(${rows}, 90px)`
                    }}
                    className="grid grid-flow-col auto-cols-[90px] auto-rows-[90px] gap-3 p-4 flex-1 overflow-hidden"
                >

                    {/* Files */}
                    {folders.map((folder) => {
                        return (
                            <div onClick={(e) => { e.stopPropagation(); selectFolder(folder.id); }} key={folder.id} className={`flex flex-col items-center justify-center hover:bg-gray-900/10 hover:border border-[#ffffff40] hover:backdrop-blur-lg rounded-lg px-3 ${selectedFolder === folder.id ? 'bg-gray-900/20 border border-[#ffffff40] backdrop-blur-lg' : ''} `}>
                                {/* Icon */}
                                <div className="flex w-17 h-17">
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
                <div className="justify-self-center self-center flex w-130 h-15 mb-5 rounded-xl backdrop-blur-[30px] bg-black/30"></div>

            </div>
        </div>
    )
}