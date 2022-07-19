
function App() {
    const { useState } = React;
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState('');
    const [show, setShow] = useState(false)
    
    const handleSubmit = () => {
        if (job === '') {
            alert('Vui lòng điền công việc của bạn!')
        } else {
            setShow(true)
            setJobs(prev => [...prev, job]);
            setJob('')
        }
    }

    function ItemJob() {
        return (
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>{job}</li>
                    ))
                }
            </ul>
        )
    }
    return (
        <div className="container">
            <div className="wrapper">
                <input
                    value={job}
                    placeholder="Công việc hôm nay của bạn là gì?"
                    onChange={(e) => setJob(e.target.value)}
                />
                <button onClick={handleSubmit}>Thêm</button>                
            </div>
            {show && <ItemJob />}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))