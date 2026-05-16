from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "FastAPI backend running"}

@app.get("/api/users")
async def users():
    return [
        {"id": 1, "name": "John"},
        {"id": 2, "name": "Jane"},
    ]
    
@app.get("/api/desktop/folders")
async def desktop():
    return [
        {"id": "1", "name": "New Folder", "empty": True},
        {"id": "2", "name": "Projects", "empty": False},
        {"id": "3", "name": "Games", "empty": False},
        {"id": "4", "name": "Screenshots", "empty": True},
        {"id": "5", "name": "College Notes", "empty": False},
        {"id": "6", "name": "Very Long Folder Name Example", "empty": True},
        {"id": "7", "name": "Music", "empty": False},
        {"id": "8", "name": "Movies", "empty": False},
        {"id": "9", "name": "Assignments", "empty": False},
        {"id": "10", "name": "Resume", "empty": True},
        {"id": "11", "name": "React Apps", "empty": False},
        {"id": "12", "name": "Node APIs", "empty": False},
        {"id": "13", "name": "Python Scripts", "empty": False},
        {"id": "14", "name": "Design Assets", "empty": True},
        {"id": "15", "name": "Vacation Photos", "empty": False},
        {"id": "16", "name": "Family Videos", "empty": False},
        {"id": "17", "name": "Certificates", "empty": True},
        {"id": "18", "name": "Freelance Work", "empty": False},
        {"id": "19", "name": "Android Studio Projects", "empty": False},
        {"id": "20", "name": "Machine Learning", "empty": False},
        {"id": "21", "name": "UI Inspirations", "empty": True},
        {"id": "22", "name": "Downloaded PDFs", "empty": False},
        {"id": "23", "name": "Invoices", "empty": True},
        {"id": "24", "name": "Ebooks", "empty": False},
        {"id": "25", "name": "3D Models", "empty": True},
        {"id": "26", "name": "Backup Files", "empty": False},
        {"id": "27", "name": "Temp", "empty": True},
        {"id": "28", "name": "Old Projects Archive", "empty": False},
        {"id": "29", "name": "Personal Documents", "empty": False},
        {"id": "30", "name": "Frontend Components", "empty": False},
        {"id": "31", "name": "Backend Services", "empty": False},
        {"id": "32", "name": "Figma Exports", "empty": True},
        {"id": "33", "name": "Canva Designs", "empty": False},
        {"id": "34", "name": "Internship Files", "empty": False},
        {"id": "35", "name": "Semester 1", "empty": False},
        {"id": "36", "name": "Semester 2", "empty": False},
        {"id": "37", "name": "Semester 3", "empty": False},
        {"id": "38", "name": "Semester 4", "empty": False},
        {"id": "39", "name": "Semester 5", "empty": True},
        {"id": "40", "name": "Hackathon Resources", "empty": False},
        {"id": "41", "name": "LeetCode Solutions", "empty": False},
        {"id": "42", "name": "Competitive Programming", "empty": False},
        {"id": "43", "name": "Portfolio Assets", "empty": True},
        {"id": "44", "name": "Cloud Computing", "empty": False},
        {"id": "45", "name": "Docker Configs", "empty": False},
        {"id": "46", "name": "Kubernetes Notes", "empty": True},
        {"id": "47", "name": "AI Research Papers", "empty": False},
        {"id": "48", "name": "Random Stuff", "empty": True},
        {"id": "49", "name": "Wallpapers HD", "empty": False},
        {"id": "50", "name": "Important", "empty": False}
    ]
    
    
@app.get("/api/taskbar/apps")
async def taskbar():
    return [
        {"id": "1", "name": "File Manager", "icon": "/Icons/FileManager.png"},
        {"id": "2", "name": "Web Browser", "icon": "/Icons/WebBrowser.png"},
        {"id": "3", "name": "Code Editor", "icon": "/Icons/CodeEditor.png"},
        {"id": "4", "name": "Terminal", "icon": "/Icons/Terminal.png"},
        {"id": "5", "name": "Music Player", "icon": "/Icons/MusicPlayer.png"},
        {"id": "6", "name": "Video Player", "icon": "/Icons/VideoPlayer.png"},
        {"id": "7", "name": "Settings", "icon": "/Icons/Settings.png"},
        {"id": "8", "name": "Email Client", "icon": "/Icons/EmailClient.png"},
        {"id": "9", "name": "Calendar", "icon": "/Icons/Calendar.png"}
    ]