import CategoryItem from "./CategoryItem"
import "../categories.style.scss"


const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (
                    <CategoryItem category={category} key={category.id} />
                )
            })}
        </div>
    )
}


export default Directory