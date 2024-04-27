root = "http://77.221.147.37"


function get_survey_by_uuid(uuid) {
    fetch(
        `${root}/survey?uuid=${uuid}`, {
            method: "GET",
        }
    )
    .then(async(response) => {
        if (!response.ok) {
            throw new Error("Not 2xx response", {cause: await response.text()});
        } else {
            let json = await response.json(); 
            console.log(json)
            return json;
        }
    })
    .catch(e => {
        console.error('EXCEPTION: ', e);
    });
}


async function get_surveys(uuid) {
    fetch(
        `${root}/surveys`, {
            method: "GET",
        }
    )
    .then(async(response) => {
        if (!response.ok) {
            throw new Error("Not 2xx response", {cause: await response.text()});
        } else {
            let json = await response.json();
            console.log(json)
            return json;
        }
    })
    .catch(e => {
        console.error('EXCEPTION: ', e);
    });
}


get_survey_by_uuid("4dda01c8-4a3c-4d77-a822-486d3a3419fa")