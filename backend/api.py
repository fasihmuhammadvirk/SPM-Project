# importing the FastAPI to create apis and status to check their status and HTTPException to handle exception
from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import model as model
from database import session

db = session()

# creating the app for making apis
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    email: str

    class Config:
        orm_mode = True


# starting
@app.get('/')
def greet():
    return {'Message': 'Hello User'}

# creating the get response to get all the data from the database


@app.get("/user", status_code=status.HTTP_200_OK)
def user_query(user: User):

    try:

        db_user = db.query(model.User).filter(
            model.User.email == user.email).first()
        if db_user is not None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="User Already Exits")

        new_user = model.User_Info(
            email=user.email,
        )

        db.add(new_user)
        db.commit()

        return {'Message': 'User Added'}
    except Exception as e:
        print(e)
