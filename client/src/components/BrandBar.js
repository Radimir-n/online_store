import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row>
        {device.brands.map(brand =>
            <Card 
                style={{cursor:'pointer'}}
                key={brand.id}
                onClick ={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                className="p-3"
            >
                {brand.name}
            </Card>
        )}
                
        </Row>
    )
})

export default BrandBar