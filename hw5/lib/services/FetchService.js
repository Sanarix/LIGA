class FetchService {
    get(url, params) {
        fetch(`${url}/${(params === null || params === void 0 ? void 0 : params.id) || ''}`)
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
            .then((data) => {
            console.log('fetchService GET');
            console.log(data);
        })
            .catch((err) => console.log(err))
            .finally(() => {
            console.log('-------------------------------');
        });
    }
    post(url, params) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params.body),
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
            .then((data) => {
            console.log('fetchService POST');
            console.log(data);
        })
            .catch((err) => console.log(err))
            .finally(() => {
            console.log('-------------------------------');
        });
    }
    patch(url, params) {
        fetch(`${url}/${params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params.body),
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
            .then((data) => {
            console.log('fetchService PATCH');
            console.log(data);
        })
            .catch((err) => console.log(err))
            .finally(() => {
            console.log('-------------------------------');
        });
    }
    delete(url, params) {
        fetch(`${url}/${params.id}`, {
            method: 'DELETE',
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`Error: id ${res.statusText.toLowerCase()}`);
        })
            .then(() => {
            console.log(`File id:${params.id} has been deleted.`);
        })
            .catch((err) => {
            console.log(err.message);
        })
            .finally(() => {
            console.log('-------------------------------');
        });
    }
}
export default FetchService;
//# sourceMappingURL=FetchService.js.map