

const Description = ({course}) => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-medium py-4">Description:</h1>
                <p className="text-justify">{course?.description}</p>
            </div>
            <div className="py-8">
                <h1 className="text-2xl font-medium py-4">Curriculum:</h1>
                <p className="text-justify">{course?.curriculum}</p>
            </div>
            <div>
                <h1 className="text-2xl font-medium py-4">Certification:</h1>
                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem Ipsum passages desktop publishing software.</p>
            </div>
        </div>
    );
};

export default Description;