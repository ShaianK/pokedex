import { FaSearch } from "react-icons/fa"

export default function SearchBar({}) {
    const handleChange = (value: string) => {
        console.log(value)
    }

    return (
        <div className="bg-slate-600 w-full rounded-lg h-[12] p-4 shadow-large 
        flex items-center">
            <input type="text" placeholder="Search Pokemon" 
            className="bg-transparent border-none outline-none text-xl ml-0 
            placeholder: text-gray-300 w-full" onChange={(e) => handleChange(e.target.value)}/>
            <FaSearch className="text-red-500 cursor-pointer"/>
        </div>
    )
}