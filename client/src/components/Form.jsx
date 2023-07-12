
const Form = () => {
  return (
    <form>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-600 uppercase">Category</label>
            <select name="category" className="w-full p-3 bg-white border border-gray-400 rounded-md">
                <option value=""> -- Select Category --</option>
            </select>
        </div>
    </form>
  )
}

export default Form