
const Title = ({heading, subHeading}) => {
    return (
        <div className="mt-10">
<h2 className="mx-auto width-[50%] text-center text-4xl font-bold"> {heading}</h2>
<h4 className="mx-auto width-[30%] text-center mt-4 "> {subHeading} </h4>
        </div>
    );
};

export default Title;