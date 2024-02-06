
export default function ToolTip({info}) {
  return (
    <div className='w-[200px] p-4 rounded-2xl bg-gray-300 shadow-xl border border-neutral-800 absolute top-1/2  left-1/2 overflow-auto'>
        <h2 className="text-base"><b>Q:</b> {info?.question}</h2>
        <h3 className="text-sm font-bold">Options:</h3>
        <ul className="text-xs list-disc list-inside">
            {info?.options?.map((item, idx)=> (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
