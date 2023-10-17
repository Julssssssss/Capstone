import AddItem from "../../components/addItem"
import EditButton from "./editButton"
import ResButton from "./resButton"
import DeleteButton from "./deleteButton"

const lostItems = () => {

const sample = [
  {label: 'wallet'},
  {label: 'cellphone'},
  {label: 'laptop'},

]

  function itemsFormat (){
    return sample.map((elem) =>{
      return(
        <div className=" mt-[2rem]">
              <div className="flex flex-row bg-[#17394C] w-[70rem] h-auto space-x-[2rem] rounded-xl">
                <div className="text-white ml-[1rem] text-[2rem]">
                  {elem.label}
                </div>
                  <div className="flex flex-row-reverse bg-[#17394C] w-[70rem] items-center">
                      <div className="text-white mr-[2rem] flex flex-row space-x-[2rem]">
                        <EditButton />
                        <ResButton />
                        <DeleteButton />
                      </div>  
                   
                  </div>
              </div>
              
            </div>
      )
    })
  }


    return (
      <>
        <div className="bg-[#134083] w-[74rem] h-[48rem] rounded-[2rem] flex flex-col space-x-[2rem] self-center">
            <div className="flex flex-row-reverse mt-[1.5rem] mr-[2rem] h-[3rem]">
              <AddItem />
            </div>
            {itemsFormat()}
        </div>
       
      </>
    )
  }
  
  export default lostItems