
const Title = ({ heading, subHeading, color }) => {
    return (
        <div className="mt-10">
            <h2 className={`mx-auto width-[50%] text-center text-4xl font-bold text-${color}`}> {heading}</h2>
            <h4 className="mx-auto width-[30%] text-center mt-4 "> {subHeading} </h4>
        </div>
    );
};

export default Title;