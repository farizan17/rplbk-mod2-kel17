import './Card.css';

export default function CardProfile (props) {
    // {nama_lengkap, nama_panggilan, nim, nomor_telepon, id_line, email, hobi, tanggal_lahir}
    return (
        <>
        <div className="profilecard">
        <h2>{props.nama_lengkap}</h2>
        <p>Nama Lengkap : {props.nama_lengkap}</p>
        <p>Nama Panggilan : {props.nama_panggilan}</p>
        <p>NIM : {props.nim}</p>
        <p>Nomor Telepon : {props.nomor_telepon}</p>
        <p>ID Line : {props.id_line}</p>
        <p>Email : {props.email}</p>
        <p>Hobi : {props.hobi}</p>
        <p>Tanggal Lahir : {props.tanggal_lahir}</p>
        </div>
        </>
    )
}