
function App() {
    const { useState } = React;
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState('');
    console.log(job);
    const handleSubmit = () => {
        if (job === '') {
            alert('Vui lòng điền công việc của bạn!')
        } else {
            setJobs(prev => [...prev, job]);
            setJob('')
        }
    }
    return (
        <div className="container">
            <div className="wrapper">
                <input
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button onClick={handleSubmit}>Thêm</button>                
            </div>
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>{job}</li>
                    ))
                }
            </ul>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))