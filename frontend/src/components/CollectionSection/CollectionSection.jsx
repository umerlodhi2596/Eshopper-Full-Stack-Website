import React from 'react'
import CollectionCard from '../CollectionCard/CollectionCard'

function CollectionSection() {
    return (
        <>
            <div className="collection-section-wrapper section-space">
                <div className="container">
                    <div className="row">
                        <CollectionCard title="Summer Collection"
                            subtitle="20% OFF THE ALL ORDER"
                            image="./assets/images/offer-1.png"
                            textAlign="right" 
                            imageAlign="left"
                        />
                        <CollectionCard title="Winter Collection"
                            subtitle="20% OFF THE ALL ORDER"
                            image="./assets/images/offer-2.png"
                            textAlign="left" 
                            imageAlign="right"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionSection
