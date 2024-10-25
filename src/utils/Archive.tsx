import ArchiveIco from "@/assets/archive";

export default function Archive() {
    return(
        <div className="modal-body">
            <button className="upload-area">
                <span className="upload-area-icon">
                    <ArchiveIco />
                </span>
                <span className="upload-area-title">Deslize um arquivos aqui</span>
                <span className="upload-area-description">
                    ou <br/><strong>Clique aqui</strong>
                </span>
            </button>
        </div>
    )
}