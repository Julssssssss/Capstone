import { useState } from "react";

const RequestList = () => {
  const RequestListData = [
    { username: 'Johndoe' },
    { username: 'Juls' },
  ];
  const [date, setDate] = useState('');

  const isWeekend = (selectedDate) => {
    const day = new Date(selectedDate).getDay();
    return day === 0 || day === 6;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (isWeekend(selectedDate)) {
      // Prevent the user from selecting a weekend date
      setDate('');
    } else {
      setDate(selectedDate);
    }
  };

  function requestFormat() {
    return RequestListData.map((elem, index) => (
      <div key={index}>
        <div className="flex flex-row bg-[#17394C] w-[25rem] h-[3rem] space-x-[2rem] justify-between rounded-xl">
          <div className="self-center text-white ml-[1rem] text-[1.3rem]">
            {elem.username}
          </div>
          <div className="self-center">
            <button className="m-[0.5rem] mr-[1rem] bg-[#F9D62B] w-[4rem] rounded-xl">View</button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className="self-center h-full pb-[10rem]">
        <div className="flex flex-row h-full w-[76rem] rounded-[2rem] bg-[#134083] p-[2rem] space-x-[1rem]">
          <div className="flex flex-col items-center p-[3rem] space-y-[1.5rem] overflow-y-scroll overflow-x-hidden w-[40%] h-full">
            {requestFormat()}
          </div>
          <div className="flex flex-col w-[60%] h-full p-[2rem] bg-white rounded-xl border-[#F9D62B] border-[0.5rem] space-y-[1rem]">
            <div className="flex flex-row justify-between">
              <div>Username</div>
              {/* Calendar */}
              <input
                type="date"
                className="w-[15rem] border-[0.2rem] border-[#F9D62B] rounded-xl"
                value={date} // Make sure value is always defined
                onChange={handleDateChange}
                disabled={isWeekend(date)} // Disable the input on weekends
              />
            </div>
            <div className="text-center border-[0.2rem] border-[#F9D62B] rounded-xl h-[20rem] text-[1.5rem]">
              Item description
            </div>
            <div className="text-center border-[0.2rem] border-[#F9D62B] rounded-xl h-[20rem] text-[1.5rem]">
              Item description
            </div>
            <button className="bg-[#F9D62B] self-center w-[20rem] h-[3rem] text-[1.5rem] rounded-full">Approved Request</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestList;
