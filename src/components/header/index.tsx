import RejuvenateAi from "../../images/svg/rejuvenate-logo.svg";

const Header = () => {
  return (
    <section className='max-w-[1300px] w-full py-5 flex justify-between items-center mx-auto'>
        <div>
            <RejuvenateAi />
        </div>
        <button className="bg-[#014421] w-[163px] h-[59px] font-bold text-[20px] text-[#F5F5DC] rounded-xl">
            Register
        </button>
    </section>
  );
};

export default Header;
