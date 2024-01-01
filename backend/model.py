from database import engine 
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column,String,Integer,DateTime,Boolean,UniqueConstraint

Base = declarative_base()

# orm of user_info table
class User(Base):
    
    __tablename__ = "user"
    
    id = Column(Integer(),primary_key=True) 
    email = Column(String(100),nullable = False) 

    def __repr__(self):
        return f"<User Id { self.id } User Email {self.email}>"

