
const Error404 = () => {
    return (
        <div>
            <h1>٤٠٤</h1>
            <p>غير موجود</p>
            <a href="/">خذني إلي الرئيسية</a>
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                h1 {
                    margin: 0;
                    font-size: 200px;
                }
                p {
                    font-size: 50px;
                }
            `}</style>
        </div>
    );
} 

export default Error404
