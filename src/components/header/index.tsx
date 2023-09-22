import RejuvenateAi from "../../images/svg/rejuvenate-logo.svg";

const Header = () => {
  return (
    <section className='max-w-[1300px] w-full py-1 flex justify-between items-center mx-auto'>
        <div>
            <RejuvenateAi />
        </div>
        <button className="bg-[#014421] h-[48px] w-[110px] lg:w-[163px] lg:h-[50px] font-bold text-base lg:text-[20px] text-[#F5F5DC] rounded-xl">
            Register
        </button>
    </section>
  );
};

export default Header;
