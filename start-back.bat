@echo off

start /b cmd /c "cd backend && venv\Scripts\activate && uvicorn main:app --reload"
