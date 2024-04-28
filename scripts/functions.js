root = "http://77.221.147.37"


async function get_surveys(uuid) {
    fetch(
        `${root}/surveys`, {
            method: "GET",
        }
    )
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(res => console.error(res));
}


// function get_survey_by_uuid(uuid) {
//     fetch(
//         `${root}/survey?uuid=${uuid}`, {
//             method: "GET",
//         }
//     )
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(res => console.error(res));
// }


// get_survey_by_uuid("4dda01c8-4a3c-4d77-a822-486d3a3419fa")
get_surveys()