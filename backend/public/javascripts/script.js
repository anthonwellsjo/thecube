import { URI } from '/javascripts/modules/api-uri.mjs';

document.body.onload = script;


function script() {
    page.main();
}


const page = {
    main: () => {
        render.mainNav();
        addEventHandlersTo.mainNav();
    },
    piecesNav: () => {
        render.piecesNav();
        addEventHandlersTo.piecesNav();
    },
    leasingNav: () => {
        render.leasingNav();
    },
    findPiece: async () => {
        render.pageIsBusy();
        await data.getDbData();
        if (data.allDbDataFetched()) {
            render.findPiecePage();
            addEventHandlersTo.findPiecePage();
        }
    },
    piecesFound: async () => {
        render.piecesFound();
    },
    addPiece: async () => {
        render.pageIsBusy();
        await data.getDbData();
        if (data.allDbDataFetched()) {
            render.addPiecePage();
            addEventHandlersTo.addPiecePage();
            const brandsArray = functions.getStringArrayFromObjectsProperty(data.brands, "name");
            const categoriesArray = functions.getStringArrayFromObjectsProperty(data.categories, "name");
            const stylesArray = functions.getStringArrayFromObjectsProperty(data.styles, "name");
            const materialsArray = functions.getStringArrayFromObjectsProperty(data.materials, "name");
            const colorsArray = functions.getStringArrayFromObjectsProperty(data.colors, "name");

            console.log("arraya", categoriesArray, stylesArray, materialsArray, colorsArray);
            UI.createAutoComplete(document.getElementById("add-form-brand"), brandsArray);
            UI.createAutoComplete(document.getElementById("add-form-category"), categoriesArray);
            UI.createAutoComplete(document.getElementById("add-form-style"), stylesArray);
            UI.createAutoComplete(document.getElementById("add-form-material"), materialsArray);
            UI.createAutoComplete(document.getElementById("add-form-color"), colorsArray);

        }
    },
}



const render = {
    pageIsBusy: () => {
        document.getElementById("page-content").innerHTML = `
        <div id="spinner-container">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        `
    },
    siteIsBusy: () => {
        document.getElementById("page-content").innerHTML += `
        <div id="site-is-busy-container">
            <div id="spinner-container">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        <div id="site-is-busy-container">
        `
    },
    siteIsNotBusy: () => {
        document.getElementById("site-is-busy-container").remove();
    },
    mainNav: () => {
        document.getElementById("app").innerHTML = `
        <nav id="mainNav" class="navbar navbar-expand-lg navbar-light bg-light">
            <a id="homeBtn" class="navbar-brand" href="#">Cube Admin</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" id="piecesBtn" href="#">${language[pageSettings.language].nav.pieces}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="leasingBtn" href="#">${language[pageSettings.language].nav.leasing}</a>
                </li>
            </ul>
        </nav>
        <div id ="secondaryNavContainer">
        </div>
        <div id="page-content"></div>
    `
    },
    piecesNav: () => {
        document.getElementById("secondaryNavContainer").innerHTML = `
        <nav id="secondaryNav" class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" id="findPieceBtn" href="#">${language[pageSettings.language].secNav.findPiece}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${language[pageSettings.language].secNav.addPiece}</a>
                </li>
            </ul>
        </nav>
        `
    },
    leasingNav: () => {
        document.getElementById("secondaryNavContainer").innerHTML = `
        <nav id="secondaryNav" class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" id="searchPieceBtn" href="#">${language[pageSettings.language].secNav.newLease}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${language[pageSettings.language].secNav.findLease}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${language[pageSettings.language].secNav.ongoingLeases}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${language[pageSettings.language].secNav.calendar}</a>
                </li>
            </ul>
        </nav>
        `
    },
    findPiecePage: () => {
        document.getElementById("page-content").innerHTML = `
        <h3 class="page-header">${language[pageSettings.language].findPiecePage.header}</h3>
            <form class="id-form">
                <div class="form-group">
                    <label for="search-form-id">ID</label>
                    <div id="id-container">
                        <input maxlength="24" type="string" class="form-control" id="search-form-id" placeholder="5f9093819c3ea25344d02e3d
                        "/>
                        <div id="id-input-accessories">
                            <p id="confirm-id-text"></p>
                        </div>
                    </div>
                </div>
            </form>
            <br>
            <hr>
            <br>
            <form class="attributes-form">
                <div class="form-group">
                    <label for="search-form-category">${language[pageSettings.language].findPiecePage.category}</label>
                    <select class="form-control" id="search-form-category">
                    <option id="null">-</option>
                    ${data.categories.map(c => {
            return (
                `<option name="category" id=${c._id}>${c.name}</option>`
            )
        })}
                    </select>
                </div>
                <div class="form-group">
                    <label for="search-form-style">${language[pageSettings.language].findPiecePage.style}</label>
                    <select class="form-control" id="search-form-style">
                    <option id="null">-</option>
                    ${data.styles.map(m => {
            return (
                `<option name="style" id=${m._id}>${m.name}</option>`
            )
        })}
                    </select>
                </div>
                <div class="form-group">
                    <label for="search-form-material">${language[pageSettings.language].findPiecePage.material}</label>
                    <select class="form-control" id="search-form-material">
                    <option id="null">-</option>
                    ${data.materials.map(m => {
            return (
                `<option name="material" id=${m._id}>${m.name}</option>`
            )
        })}
                    </select>
                </div>
                <div class="form-group">
                    <label for="search-form-color">${language[pageSettings.language].findPiecePage.color}</label>
                    <select class="form-control" id="search-form-color">
                    <option id="null">-</option>
                    ${data.colors.map(m => {
            return (
                `<option name="material" id=${m._id}>${m.name}</option>`
            )
        })}
                    </select>
                </div>
            </form>
            <br>
            <br>
            <div id="pieces-found-container"></div>
        `
    },
    piecesFound: () => {
        if (data.piecesFound.length < 1) {
            document.getElementById("pieces-found-container").innerHTML = "";
        } else {
            document.getElementById("pieces-found-container").innerHTML = `
        ${data.piecesFound.map(p => {
                return (`<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/286/286?grayscale" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${data.categories.find(c => c._id === p.category).name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.styles.find(s => s._id === p.style).name}</h6>
                <p class="card-text">${p.description}</p>
                </div>
            </div>`)
            })}
        `}
    },
    addPiecePage: () => {
        document.getElementById("page-content").innerHTML = `
        <h3 class="page-header">${language[pageSettings.language].addPiecePage.header}</h3>
            <br>
                <form class="add-piece-form" autocomplete="off">
                <div class="form-group">
                    <label for="add-form-name">${language[pageSettings.language].addPiecePage.name}</label>
                    <input type="text" class="form-control" id="add-form-name" name="name" placeholder="${language[pageSettings.language].addPiecePage.nameInputPlaceholder}">
                </div>
                <div class="form-group">
                    <label for="add-form-description">${language[pageSettings.language].addPiecePage.description}</label>
                    <textarea maxlength="150" style="height: 65px; resize: none;" name="description" class="form-control" id="add-form-description" placeholder="${language[pageSettings.language].addPiecePage.descriptionInputPlaceholder}"></textarea>
                </div>
              
                <div class="autocomplete">
                    <label for="add-form-brand">${language[pageSettings.language].addPiecePage.brand}</label>
                    <input class="form-control" class="form-control" id="add-form-brand" type="text" name="brand" placeholder="${language[pageSettings.language].addPiecePage.brandInputPlaceholder}" />
                </div>
                <div class="autocomplete">
                    <label for="add-form-category">${language[pageSettings.language].addPiecePage.category}</label>
                    <input class="form-control" class="form-control" id="add-form-category" type="text" name="category" placeholder="${language[pageSettings.language].addPiecePage.categoryInputPlaceholder}" />
                </div>
                <div class="autocomplete">
                    <label for="add-form-style">${language[pageSettings.language].addPiecePage.style}</label>
                    <input class="form-control" id="add-form-style" type="text" name="style" placeholder="${language[pageSettings.language].addPiecePage.styleInputPlaceholder}" />
                </div>
                <div class="autocomplete">
                    <label for="add-form-material">${language[pageSettings.language].addPiecePage.material}</label>
                    <input class="form-control" id="add-form-material" type="text" name="material" placeholder="${language[pageSettings.language].addPiecePage.materialInputPlaceholder}" />
                </div>
                <div class="autocomplete">
                    <label for="add-form-color">${language[pageSettings.language].addPiecePage.color}</label>
                    <input class="form-control" id="add-form-color" type="text" name="color" placeholder="${language[pageSettings.language].addPiecePage.colorInputPlaceholder}" />
                </div>
                <button id="add-form-submit" type="submit" class="btn btn-primary">${language[pageSettings.language].addPiecePage.addBtn}</button>
            </form>
        `
    },
    previewNewPieceModal: () => {

    }


}

const UI = {
    unfocusForm: formName => {
        document.getElementsByClassName(formName)[0].setAttribute("id", "unfocus");
    },
    focusForm: formName => {
        if (document.getElementsByClassName(formName)[0].getAttribute("id") !== null) {
            document.getElementsByClassName(formName)[0].removeAttribute("id");
        }
    },
    idSearchSuccess: () => {
        UI.removeSpinnerForIdInput();
        document.getElementById("search-form-id").style.backgroundColor = "#ABFF73";
    },
    removeIdSearchSuccess: () => {
        document.getElementById("search-form-id").style.backgroundColor = "white";
    },
    spinnerForIdInput: () => {
        document.getElementById("id-input-accessories").innerHTML += `
        <div id="id-spinner" class="spinner-grow spinner-grow-sm" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    `
    },
    removeSpinnerForIdInput: () => {
        if (document.getElementById("id-spinner")) {
            document.getElementById("id-spinner").remove();
        }
    },
    createAutoComplete: (searchEle, arr) => {
        var currentFocus;
        searchEle.addEventListener("input", function (e) {
            console.log("goooo");
            var divCreate,
                b,
                i,
                fieldVal = this.value;
            closeAllLists();
            if (!fieldVal) {
                return false;
            }
            currentFocus = -1;
            divCreate = document.createElement("DIV");
            divCreate.setAttribute("id", this.id + "autocomplete-list");
            divCreate.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(divCreate);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, fieldVal.length).toUpperCase() == fieldVal.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].substr(0, fieldVal.length) + "</strong>";
                    b.innerHTML += arr[i].substr(fieldVal.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function (e) {
                        searchEle.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    divCreate.appendChild(b);
                }
            }
        });
        searchEle.addEventListener("keydown", function (e) {
            var autocompleteList = document.getElementById(
                this.id + "autocomplete-list"
            );
            if (autocompleteList)
                autocompleteList = autocompleteList.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(autocompleteList);
            }
            else if (e.keyCode == 38) {
                //up
                currentFocus--;
                addActive(autocompleteList);
            }
            else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (autocompleteList) autocompleteList[currentFocus].click();
                }
            }
        });
        function addActive(autocompleteList) {
            if (!autocompleteList) return false;
            removeActive(autocompleteList);
            if (currentFocus >= autocompleteList.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = autocompleteList.length - 1;
            autocompleteList[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(autocompleteList) {
            for (var i = 0; i < autocompleteList.length; i++) {
                autocompleteList[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            var autocompleteList = document.getElementsByClassName(
                "autocomplete-items"
            );
            for (var i = 0; i < autocompleteList.length; i++) {
                if (elmnt != autocompleteList[i] && elmnt != searchEle) {
                    autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
                }
            }
        }
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    },
}

const addEventHandlersTo = {
    mainNav: () => {
        document.getElementById("piecesBtn").addEventListener("click", eventHandlers.onPiecesBtnClicked);
        document.getElementById("leasingBtn").addEventListener("click", eventHandlers.onLeasingBtnClicked);
        document.getElementById("homeBtn").addEventListener("click", eventHandlers.onHomeBtnClicked);
    },
    piecesNav: () => {
        document.getElementById("findPieceBtn").addEventListener("click", eventHandlers.onFindPieceBtnClicked);
        document.getElementById("addPieceBtn").addEventListener("click", eventHandlers.onAddPieceBtnClicked);
    },
    findPiecePage: () => {
        document.getElementById("search-form-id").addEventListener("keyup", e => eventHandlers.onIdChange(e))
        document.getElementsByClassName("id-form")[0].addEventListener("click", eventHandlers.onFocusIdForm);
        document.getElementsByClassName("attributes-form")[0].addEventListener("click", eventHandlers.onFocusAttributesForm);
        document.getElementsByClassName("attributes-form")[0].addEventListener("change", e => eventHandlers.onChangeAttributesForm(e));
    },
    addPiecePage: () => {
        document.getElementById("add-form-submit").addEventListener("click", e => eventHandlers.onSubmitAddFormClickedEventHandler(e));
    },


}

const eventHandlers = {
    onPiecesBtnClicked: () => {

        page.piecesNav();
    },
    onLeasingBtnClicked: () => {
        page.leasingNav();
    },
    onHomeBtnClicked: () => {
        page.main();
    },
    onFindPieceBtnClicked: () => {
        page.findPiece();
    },
    onAddPieceBtnClicked: () => {
        page.addPiece();
    },
    onIdChange: async e => {
        const numchar = e.target.value.split("").length;
        document.getElementById("confirm-id-text").innerText = functions.getIdInputCharLeft(e);
        if (numchar < 24) {
            flag.searchPieceSuccess = false;
            UI.removeSpinnerForIdInput();
            UI.removeIdSearchSuccess();
            data.piecesFound = [];
            page.piecesFound();
        }
        if (numchar === 24 && !flag.searchPieceSuccess) {
            UI.spinnerForIdInput();
            const piece = await data.getPieceFromId(e.target.value);
            if (Object.keys(piece.data).length > 0) {
                flag.searchPieceSuccess = true;
                UI.idSearchSuccess();
                data.piecesFound = [{ ...piece.data }];
                console.log(data.piecesFound);
                page.piecesFound();
            }
        }
    },
    onFocusIdForm: () => {
        UI.unfocusForm("attributes-form");
        UI.focusForm("id-form");
        flag.searchWithId = true;
        flag.searchWithAttributes = false;
    },
    onFocusAttributesForm: () => {
        UI.unfocusForm("id-form");;
        UI.focusForm("attributes-form");
        flag.searchWithId = false;
        flag.searchWithAttributes = true;
    },
    onChangeAttributesForm: async (e) => {
        console.log(e.target);
        const [category, style, material, color] = functions.getAllIdsFromSearchForm(e.target.parentNode.parentNode);
        console.log("category", category, "style", style, "material", material, "color", color,);
        if (category !== "null" || style !== "null" || material !== "null" || color !== "null") {
            const pieces = await data.getPiecesFromAttributes(category, style, material, color);
            data.piecesFound = [...pieces.data];
        } else {
            data.piecesFound = [];
        }
        console.log(data.piecesFound);
        page.piecesFound();
    },
    onSubmitAddFormClickedEventHandler: e => {
        e.preventDefault();
        const form = e.target.parentNode;
        try {
            functions.lockAllInputsOnAddForm(form);
            render.siteIsBusy();
            const nameValues = functions.getAllNamesFromAddForm(form);
            const fullValues = functions.getAllDbIdsOfSelectedAttributes(nameValues);
            render.previewNewPieceModal(nameValues);
        }
        finally {
            render.siteIsNotBusy();
        }

        console.log("values", nameValues);
    }
}

const data = {
    piecesFound: [],
    categories: [],
    styles: [],
    materials: [],
    colors: [],
    brands: [],
    allDbDataFetched: () => {
        return (flag.categoriesFetched && flag.stylesFetched && flag.materialsFetched && flag.colorsFetched && flag.brandsFetched)
    },
    getCategories: async () => {
        try {
            return await axios.get(URI.categories.get);
        } catch (error) {
            console.error(error)
        }
    },
    getMaterials: async () => {
        try {
            return await axios.get(URI.materials.get);
        } catch (error) {
            console.error(error)
        }
    },
    getStyles: async () => {
        try {
            return await axios.get(URI.styles.get);
        } catch (error) {
            console.error(error)
        }
    },
    getColors: async () => {
        try {
            return await axios.get(URI.colors.get);
        } catch (error) {
            console.error(error)
        }
    },
    getbrands: async () => {
        try {
            return await axios.get(URI.brands.get);
        } catch (error) {
            console.error(error)
        }
    },
    getPieceFromId: async (id) => {
        try {
            return await axios.get(URI.pieces.get + id);
        } catch (error) {
            console.error(error)
        }
    },
    getPiecesFromAttributes: async (category, style, material, color) => {
        try {
            return await axios.get(URI.pieces.get + category + "/" + style + "/" + material + "/" + color);
        } catch (error) {
            console.error(error)
        }
    },
    getDbData: async () => {
        try {
            if (!flag.categoriesFetched) {
                const categories = await data.getCategories();
                data.categories = categories.data;
                console.log(categories.data);
                flag.categoriesFetched = true;
            }
            if (!flag.materialsFetched) {
                const materials = await data.getMaterials();
                data.materials = materials.data;
                console.log(materials.data);
                flag.materialsFetched = true;
            }
            if (!flag.stylesFetched) {
                const styles = await data.getStyles();
                data.styles = styles.data;
                console.log(styles.data);
                flag.stylesFetched = true;
            }
            if (!flag.colorsFetched) {
                const colors = await data.getColors();
                data.colors = colors.data;
                console.log(colors.data);
                flag.colorsFetched = true;
            }
            if (!flag.brandsFetched) {
                const brands = await data.getbrands();
                data.brands = brands.data;
                console.log(brands.data);
                flag.brandsFetched = true;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const functions = {
    getIdInputCharLeft: (e) => {
        const realPass = "5f9093819c3ea25344d02e3d";
        console.log("pass length max", realPass.split("").length)
        const exes = (() => {
            let x = "";
            e.target.value.split("").forEach(c => {
                x += "X"
            });
            return x;
        })();
        console.log("exes", exes);
        const os = (() => {
            let o = "";
            let no = realPass.split("").length - exes.split("").length;
            for (let index = 0; index < no; index++) {
                o += "O"

            }
            return o;
        })();
        return exes + os;
    },
    getAllIdsFromSearchForm: form => {
        console.log("form", form);
        var attributes = [];
        for (var i = 0; i < form.children.length; i++) {
            var e = form.children[i].children[1];
            const s = e.options[e.selectedIndex];
            console.log(s.id);
            attributes.push(s.id);
        }
        return attributes;
    },
    getAllNamesFromAddForm: form => {
        console.log("form", form);
        var attributes = {};
        for (var i = 0; i < 7; i++) {
            var e = form.children[i].children[1];
            const s = e.value;
            console.log(s);
            attributes[`${e.name}`] = {};
            attributes[`${e.name}`] = e.value;

        }
        return attributes;
    },
    lockAllInputsOnAddForm: form => {
        console.log("form", form);
        var attributes = {};
        for (var i = 0; i < 7; i++) {
            var e = form.children[i].children[1];
            e.setAttribute("disabled", "true");

        }
        var e = form.children[7];
        e.setAttribute("disabled", "true");
    },
    getStringArrayFromObjectsProperty: (obj, prop) => {
        return Object.keys(obj).map(k => {
            return obj[k][prop];
        });
    },
    getAllDbIdsOfSelectedAttributes: obj => {
        Object.keys(obj).forEach(obj => console.log(obj));
    }
}

const flag = {
    searchWithId: false,
    searchWithAttributes: false,
    categoriesFetched: false,
    stylesFetched: false,
    materialsFetched: false,
    colorsFetched: false,
    brandsFetched: false,
    searchPieceSuccess: false,
}

const pageSettings = {
    language: "italian"
}

const language = {
    italian: {
        nav: {
            pieces: "Vestiti",
            leasing: "Noleggio"
        },
        secNav: {
            findPiece: "Ricerca vestito",
            addPiece: "Aggiungere vestito",
            newLease: "Nuovo noleggio",
            findLease: "Trova noleggio",
            ongoingLeases: "Noleggi in corso",
            calendar: "Calendario"
        },
        findPiecePage: {
            header: "Ricerca vestito",
            category: "Categoria",
            style: "Stile",
            material: "Materiale",
            color: "Colore",
        },
        addPiecePage: {
            header: "Aggiungere vestito",
            name: "Nome",
            nameInputPlaceholder: "Es. Pantalone dritto",
            description: "Descrizione",
            descriptionInputPlaceholder: "Es. Early Yves Saint Laurent, fragrant, with flower theme.",
            brand: "Marca",
            brandInputPlaceholder: "Es. Fendi",
            category: "Categoria",
            categoryInputPlaceholder: "Es. pantalone",
            style: "Stile",
            styleInputPlaceholder: "Es. sports wear",
            material: "Materiale",
            materialInputPlaceholder: "Es. cachemire.",
            color: "Colore",
            colorInputPlaceholder: "Es. rosso.",
            addBtn: "Aggiunge"
        }
    }
}
