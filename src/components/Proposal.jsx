import Button from "./Button";
import proposal from "@assets/images/proposal/proposal.png";

const Proposal = ({ className }) => {
  return (
    <section className={className}>
      <div className="cnt">
         <div className="flex max-sm:flex-col max-sm:gap-10 max-xs:gap-7 sm:items-center bg-gray rounded-[45px] w-full relative p-15 max-sm:p-12 max-sm2:p-9 max-xs:p-6">
            <div>
               <h2 className="mb-6.5 font-medium text-[30px] max-w-125">Let’s make things happen</h2>
               <div className="max-w-125 mb-6.5">
                  <p className="text-[18px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
               </div>
               <Button title="Get your free proposal" isWhite={false} />
            </div>
            <div className="static max-sm:self-center max-sm:max-w-75 max-xs:max-w-50 sm:absolute right-33.75 top-[50%] sm:-translate-y-[50%] max-lg:right-15 max-md:-right-30">
               <img src={proposal} alt="Image" />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Proposal