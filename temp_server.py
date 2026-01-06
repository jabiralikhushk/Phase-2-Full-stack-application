import sys
import os

# Add backend directory to Python path
backend_path = os.path.join(os.getcwd(), 'backend')
sys.path.insert(0, backend_path)

# Change to backend directory
os.chdir(backend_path)

# Now try to run the server with proper imports
try:
    from core.config import settings
    print('Successfully imported core.config')
except Exception as e:
    print(f'✗ Error importing core.config: {e}')
    sys.exit(1)

try:
    from core.database import engine
    print('✓ Successfully imported core.database')
except Exception as e:
    print(f'✗ Error importing core.database: {e}')
    sys.exit(1)

try:
    from api.tasks import router as tasks_router
    print('✓ Successfully imported api.tasks')
except Exception as e:
    print(f'✗ Error importing api.tasks: {e}')
    sys.exit(1)

# Now create the app with proper imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Hackathon Todo API', version='1.0.0')

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Include API routers
app.include_router(tasks_router, prefix='/api/{user_id}/tasks', tags=['tasks'])

@app.on_event('startup')
async def startup_event():
    # Create database tables
    from models.task import Task
    from models.user import User
    from sqlmodel import SQLModel
    SQLModel.metadata.create_all(bind=engine)

@app.get('/')
def read_root():
    return {'message': 'Hackathon Todo API'}

@app.get('/health')
def health_check():
    return {'status': 'healthy'}

print('Starting server on port 8000...')
import uvicorn
uvicorn.run(app, host='0.0.0.0', port=8000)