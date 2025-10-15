const initialstate = {
    men: JSON.parse(localStorage.getItem('menreducer')) || [],
    loading: false,
    MenData: null
}
export const ReducerData = (state = initialstate, action) => {
    switch (action.type) {

        case "ADD":
            let getData = JSON.parse(localStorage.getItem('menreducer')) || [];
            getData = [...getData, action.payload];
            localStorage.setItem('menreducer', JSON.stringify(getData));
            return {
                ...state,
                men: getData
            }
        case "DELETE":
            let DeleteData = JSON.parse(localStorage.getItem('menreducer')) || [];
            let DelData = DeleteData.filter((v => v.id != action.payload))
            localStorage.setItem('menreducer', JSON.stringify(DelData));
            return {
                ...state,
                men: DelData
            }
        case "GET_ONE":
            let OneRecord = JSON.parse(localStorage.getItem('menreducer')) || [];
            let oneData = OneRecord.find((v => v.id == action.payload))
            return {
                ...state,
                MenData: oneData
            }
        case "UPDATE":
            let UpdateData = JSON.parse(localStorage.getItem('menreducer')) || [];
            let uprecord = UpdateData.map((v) => {
                if (v.id == action.payload.id) {
                    return action.payload
                }
                else {
                    return v;
                }
            })
            localStorage.setItem('menreducer', JSON.stringify(uprecord));
            return {
                ...state,
                MenData: null,
                men: uprecord
            }
        case "FILTER_MEN":
            let allMen = JSON.parse(localStorage.getItem("menreducer")) || [];
            let { categories, Brand, pattern } = action.payload;

            let filtered = allMen.filter((item) => {
                const matchCategory =
                    categories.length === 0 || categories.some(
                        (cat) => cat.toLowerCase() === item.categoryType.toLowerCase()
                    );

                const matchBrand =
                    Brand.length === 0 || Brand.some((brand) => brand.toLowerCase() === item.brand.toLowerCase());

                const matchPattern =
                    pattern.length === 0 ||
                    (Array.isArray(item.pattern)
                        ? pattern.some((patt) =>
                            item.pattern
                                .map((i) => i.toLowerCase())
                                .includes(patt.toLowerCase())
                        )
                        : pattern.some(
                            (patt) => patt.toLowerCase() === item.pattern.toLowerCase()
                        ));
                return matchCategory && matchBrand && matchPattern;
            });

            return {
                ...state,
                men: filtered
            }
        default:
            return state
    }
}