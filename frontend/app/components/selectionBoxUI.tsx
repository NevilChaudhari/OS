"use client";

import { useEffect, useState } from "react";

export default function SelectionBoxUI() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 });
    const [mouseEnd, setMouseEnd] = useState({ x: 0, y: 0 });
    const [isSelecting, setIsSelecting] = useState(false);
    useEffect(() => {
        const trackMouse = (e: MouseEvent) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
            setMouseEnd({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", trackMouse);
        return () => {
            window.removeEventListener("mousemove", trackMouse);
        }
    }, [isSelecting])

    const handleMouseDown = (e: React.MouseEvent) => {
        setMouseStart({ x: e.clientX, y: e.clientY });
        setMouseEnd({ x: e.clientX, y: e.clientY });
        setIsSelecting(true);
    };
    const handleMouseUp = () => {
        setIsSelecting(false)
    }
    return (
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="relative w-screen h-screen">
            {isSelecting && (<div
                className={`absolute pointer-events-none bg-blue-400/40 border border-blue-600 flex items-center justify-center`}
                style={{
                    width: `${Math.abs(mouseEnd.x - mouseStart.x)}px`,
                    height: `${Math.abs(mouseEnd.y - mouseStart.y)}px`,
                    left: Math.min(mouseStart.x, mouseEnd.x),
                    top: Math.min(mouseStart.y, mouseEnd.y),
                }}
            ><p>{mousePos.x + ":" + mousePos.y}</p></div>)}
        </div>
    )
}