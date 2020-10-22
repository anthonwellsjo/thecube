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
        const categories = await data.getCategories();
        console.log(categories.data);
        const materials = await data.getMaterials();
        console.log(materials.data);
        const styles = await data.getStyles();
        console.log(styles.data);
        render.findPiecePage(categories.data, materials.data, styles.data);
        addEventHandlersTo.findPiecePage();
    }
}

const pageSettings = {
    language: "italian"
}

const render = {
    pageIsBusy: () => {
        document.getElementById("page-content").innerHTML = `
        <div  id="spinner-container">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        `
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
    findPiecePage: (categories, materials, styles) => {
        document.getElementById("page-content").innerHTML = `
        <h3 class="page-header">${language[pageSettings.language].findPiecePage.header}</h3>
            <form>
                <div class="form-group">
                    <label for="searchFormID">ID</label>
                    <div id="id-container">
                        <input type="string" class="form-control" id="searchFormID" placeholder="5f9093819c3ea25344d02e3d
                        "/>
                        <div id="id-spinner" class="spinner-grow spinner-grow-sm" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <p id="confirm-id-text"></p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="searchFormCategory">${language[pageSettings.language].findPiecePage.category}</label>
                    <select class="form-control" id="searchFormCategory">
                    <option id="null">-</option>
                    ${categories.map(c => {
            return (
                `<option id=${c._id}>${c.name}</option>`
            )
        })}
                    </select>
                </div>
                <div class="form-group">
                    <label for="searchFormStyle">${language[pageSettings.language].findPiecePage.style}</label>
                    <select class="form-control" id="searchFormStyle">
                    <option id="null">-</option>
                    ${styles.map(m => {
            return (
                `<option id=${m._id}>${m.type}</option>`
            )
        })}
                    </select>
                </div>
                <div class="form-group">
                    <label for="searchFormMaterial">${language[pageSettings.language].findPiecePage.material}</label>
                    <select class="form-control" id="searchFormMaterial">
                    <option id="null">-</option>
                    ${materials.map(m => {
            return (
                `<option id=${m._id}>${m.type}</option>`
            )
        })}
                    </select>
                </div>
            </form>
        `
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
        document.getElementById("searchFormID").addEventListener("keyup", e => eventHandlers.onIdChange(e))
    }

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
        alert("click");
    },
    onIdChange: e => {
        const realPass = "5f9093819c3ea25344d02e3d";
        const exes = (() => {
            let x = "";
            e.target.split("").forEach(c => {
                exes += "X"
            });
            return x;
        })();
        const os = 
        document.getElementById("confirm-id-text").innerText = e.target.value;
    }
}

const data = {
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
            categoryNullOption: "Nessun categoria",
            category: "Categoria",
            style: "Stile",
            material: "Materiale"
        }
    }
}