

const Faq = () => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    const question = `Lorem ipsum dolor sit amet, consectetur?`
  return (
    <>
    <div className="text-white m-[1.5rem]">
        FAQ<br/>
        {lorem}
    </div>
            {/*parent*/}
            <div className="flex flex-col bg-[#17394C] h-auto w-auto rounded-2xl mx-[1rem] mb-[3rem]">
                {/*button for FAQ category*/}
                <div className="flex flex-row mx-1 mt-4">
                    <button className="bg-[#134083] mx-1 px-5 rounded-2xl">hello</button>
                    <button className="bg-[#134083] mx-1 px-5 rounded-2xl">hello</button>
                    <button className="bg-[#134083] mx-1 px-5 rounded-2xl">hello</button>
                    <button className="bg-[#134083] mx-1 px-5 rounded-2xl">hello</button>
                </div>
                {/*questions*/}
                <div className="mx-[1.5rem]">
                    <div className="bg-[#0D1832] w-auto h-[1.5rem] mt-3 rounded-full text-white text-sm pl-2 mb-1">{question}</div>
                </div>
            </div>
    </>
  )
}

export default Faq