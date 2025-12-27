import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const categorySchema = new Schema(
{
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        minLength: [5, "Category name must have atleast 5 characters"],
        unique: true,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true,
    }

},
    {timestamps: true}
)

categorySchema.pre("save", function(next) {
    if(this.isModified("name")) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true,
        })
    }
})

export const Category = mongoose.model("category", categorySchema);