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
    {
        "id": "1",
        "name": "New Folder",
        "empty": "true"
    },
    {
        "id": "2",
        "name": "Projects",
        "empty": "false"
    },
    {
        "id": "3",
        "name": "Games",
        "empty": "false"
    },
    {
        "id": "4",
        "name": "Screenshots",
        "empty": "true"
    },
    {
        "id": "5",
        "name": "College Notes",
        "empty": "false"
    },
    {
        "id": "6",
        "name": "Very Long Folder Name Example",
        "empty": "true"
    },
    {
        "id": "7",
        "name": "Music",
        "empty": "false"
    },
    {
        "id": "8",
        "name": "Movies",
        "empty": "false"
    },
    {
        "id": "9",
        "name": "Assignments",
        "empty": "false"
    },
    {
        "id": "10",
        "name": "Resume",
        "empty": "true"
    },
    {
        "id": "11",
        "name": "React Apps",
        "empty": "false"
    },
    {
        "id": "12",
        "name": "Node APIs",
        "empty": "false"
    },
    {
        "id": "13",
        "name": "Python Scripts",
        "empty": "false"
    },
    {
        "id": "14",
        "name": "Design Assets",
        "empty": "true"
    },
    {
        "id": "15",
        "name": "Vacation Photos",
        "empty": "false"
    },
    {
        "id": "16",
        "name": "Family Videos",
        "empty": "false"
    },
    {
        "id": "17",
        "name": "Certificates",
        "empty": "true"
    },
    {
        "id": "18",
        "name": "Freelance Work",
        "empty": "false"
    },
    {
        "id": "19",
        "name": "Android Studio Projects",
        "empty": "false"
    },
    {
        "id": "20",
        "name": "Machine Learning",
        "empty": "false"
    },
    {
        "id": "21",
        "name": "UI Inspirations",
        "empty": "true"
    },
    {
        "id": "22",
        "name": "Downloaded PDFs",
        "empty": "false"
    },
    {
        "id": "23",
        "name": "Invoices",
        "empty": "true"
    },
    {
        "id": "24",
        "name": "Ebooks",
        "empty": "false"
    },
    {
        "id": "25",
        "name": "3D Models",
        "empty": "true"
    },
    {
        "id": "26",
        "name": "Backup Files",
        "empty": "false"
    },
    {
        "id": "27",
        "name": "Temp",
        "empty": "true"
    },
    {
        "id": "28",
        "name": "Old Projects Archive",
        "empty": "false"
    },
    {
        "id": "29",
        "name": "Personal Documents",
        "empty": "false"
    },
    {
        "id": "30",
        "name": "Frontend Components",
        "empty": "false"
    },
    {
        "id": "31",
        "name": "Backend Services",
        "empty": "false"
    },
    {
        "id": "32",
        "name": "Figma Exports",
        "empty": "true"
    },
    {
        "id": "33",
        "name": "Canva Designs",
        "empty": "false"
    },
    {
        "id": "34",
        "name": "Internship Files",
        "empty": "false"
    },
    {
        "id": "35",
        "name": "Semester 1",
        "empty": "false"
    },
    {
        "id": "36",
        "name": "Semester 2",
        "empty": "false"
    },
    {
        "id": "37",
        "name": "Semester 3",
        "empty": "false"
    },
    {
        "id": "38",
        "name": "Semester 4",
        "empty": "false"
    },
    {
        "id": "39",
        "name": "Semester 5",
        "empty": "true"
    },
    {
        "id": "40",
        "name": "Hackathon Resources",
        "empty": "false"
    },
    {
        "id": "41",
        "name": "LeetCode Solutions",
        "empty": "false"
    },
    {
        "id": "42",
        "name": "Competitive Programming",
        "empty": "false"
    },
    {
        "id": "43",
        "name": "Portfolio Assets",
        "empty": "true"
    },
    {
        "id": "44",
        "name": "Cloud Computing",
        "empty": "false"
    },
    {
        "id": "45",
        "name": "Docker Configs",
        "empty": "false"
    },
    {
        "id": "46",
        "name": "Kubernetes Notes",
        "empty": "true"
    },
    {
        "id": "47",
        "name": "AI Research Papers",
        "empty": "false"
    },
    {
        "id": "48",
        "name": "Random Stuff",
        "empty": "true"
    },
    {
        "id": "49",
        "name": "Wallpapers HD",
        "empty": "false"
    },
    {
        "id": "50",
        "name": "Important",
        "empty": "false"
    }
]