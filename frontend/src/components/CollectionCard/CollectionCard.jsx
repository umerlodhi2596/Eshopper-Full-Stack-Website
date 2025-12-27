import React from 'react'
import './collectioncard.css'

function CollectionCard({title, subtitle, image, textAlign, imageAlign}) {
    return (
        <>
            <div className="col-md-6">
                <div className="collection-card-wrapper">
                    <div className="collection-card">
                        <div className={`card-content ${textAlign}`}>
                            <h6>{subtitle}</h6>
                            <h2>{title}</h2>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className={`collection-image ${imageAlign}`}>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionCard
