from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Routine(db.Model, UserMixin):
  __tablename__ = 'exercises'

  id = db.Column(db.Integer, primary_key = True)
  owner_id = db.Column(db.Integer, db.ForeignKey('routinelist.id'))
  workout_id = db.Column(db.Integer, db.ForeignKey('workouts.id'))
  workoutintensity_id = db.Column(db.Integer, db.ForeignKey('workoutintensities.id'))
  created_on = db.Column(db.DateTime, server_default=db.func.now())
  updated_on = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )


  workout = db.relationship(
    "Workout",
    back_populates="routine"
  )


  workoutintensity = db.relationship(
    "WorkoutIntensity",
    back_populates="routine"
  )


#   def to_dict(self):
#     return {
#       "id": self.id,
#       "name": self.name,
#       "description": self.description,
#       "rating": self.rating,
#       "time": self.time,
#       "date": self.date,
#       "pull": self.pull,
#       "push": self.push,
#     }

      # "reviews": [review.to_dict() for review in self.reviews]
