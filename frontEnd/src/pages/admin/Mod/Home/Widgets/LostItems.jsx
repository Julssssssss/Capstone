import AddItem from "../../../MainComponents/AddItem"
import RequestButton from "../../../MainComponents/RequestsButton"

const lostItems = () => {
  return (
    <>
    <div className="flex flex-row space-x-[2rem] self-center">
        <div className="bg-[#134083] w-[48rem] h-[30rem] rounded-[2rem]">
            Lost items
        </div>
        <div className="flex flex-col place-items-center justify-center">
            <AddItem />
            <RequestButton />
            <div className="bg-[#134083] h-[20rem] w-[23rem] rounded-[2rem] text-white">
                calendar
            </div>
        </div>
    </div>
    </>
  )
}

export default lostItems