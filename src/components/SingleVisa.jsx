import Swal from "sweetalert2";

const SingleVisa = ({ oneVisa, setAddedByYou, addedByYou }) => {

    const { method, validity, time, visa, image, name, fee, _id } = oneVisa;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/addedvisas/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const newData = addedByYou.filter((oneInfo) => _id != oneInfo?._id);
                        setAddedByYou(newData)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Created Visa  Application has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card glass ">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Visa Type: {visa}</h2>
                    <p>Country: {name}</p>
                    <p>Processing Time: {time}</p>
                    <p>Visa Fee: {fee}</p>
                    <p>Visa Validity: {validity}</p>
                    <p>Application Process: {method} </p>
                    <div className="card-actions justify-start mt-2">
                        <button className="btn btn-error text-white" onClick={() => handleDelete(_id)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleVisa;