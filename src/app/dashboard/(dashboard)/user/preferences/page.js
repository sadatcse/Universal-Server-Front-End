
export default function Page() {
  return (
    <div>
      <div>
        <div className="min-h-screen bg-amber-200 border rounded-md ">
          <form className="p-10">
            <h1 className="text-end font-normal text-xl"><button className=" btn btn-accent">Edit</button></h1>
            <h1 className="text-end font-normal text-xl"><button className=" btn btn-accent">Save</button></h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Zone</span>
              </label>
              <input type="time" placeholder="time" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date/Time Format</span>
              </label>
              <input type="date" placeholder="date/time" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Language</span>
              </label>
              <select name="language" id="">
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
