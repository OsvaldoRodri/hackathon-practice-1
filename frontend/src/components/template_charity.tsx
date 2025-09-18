import "../styles/template_charity.css";

type Charity = {
    title?: string;
    description?: string;
    imageSource?: string;
    imgAlt?: string;

}

function TemplateCharity({ title, description, imageSource, imgAlt }: Charity) {
    return (
        <main className="main-container">
            {imageSource && <img src={imageSource} alt={imgAlt} />}
            <div className="card">
                <h1>{title}</h1>
                <p>{description}</p>
                <button type="button" onClick={() => alert("Thank you for your donation!")}>Donate</button>
            </div>
        </main>
    );
}

export default TemplateCharity;