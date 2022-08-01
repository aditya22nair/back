const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    companyName: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    slots: [
      {
        timing:{type:String},
        totalSlots:{type:Number,default:10},
        slotsAvailable:{type:Number,default:10}
      }
    ]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
