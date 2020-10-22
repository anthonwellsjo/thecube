import { categoryURI } from '/javascripts/modules/api-uri.mjs';

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
        console.log(categories);
        render.findPiecePage();
        addEventHandlersTo.findPiece();
    }
}

const render = {
    mainNav: () => {
        document.getElementById("app").innerHTML = `
        <nav id="mainNav" class="navbar navbar-expand-lg navbar-light bg-light">
            <a id="homeBtn" class="navbar-brand" href="#">Cube Admin</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" id="piecesBtn" href="#">${italian.nav.pieces}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="leasingBtn" href="#">${italian.nav.leasing}</a>
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
                <a class="nav-link" id="findPieceBtn" href="#">${italian.secNav.findPiece}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${italian.secNav.addPiece}</a>
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
                <a class="nav-link" id="searchPieceBtn" href="#">${italian.secNav.newLease}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${italian.secNav.findLease}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${italian.secNav.ongoingLeases}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="addPieceBtn" href="#">${italian.secNav.calendar}</a>
                </li>
            </ul>
        </nav>
        `
    },
    findPiecePage: () => {
        document.getElementById("page-content").innerHTML = `
        <h3 class="page-header">${italian.findPiecePage.header}</h3>
            <form>
                <div class="form-group">
                    <label for="searchFormID">ID</label>
                    <input type="string" class="form-control" id="searchFormID" placeholder="format: 5f9093819c3ea25344d02e3d
                    ">
                </div>
                <div class="form-group">
                    <label for="searchFormIDCategory">Category</label>
                    <select class="form-control" id="searchFormIDCategory">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </form>
        `
    },
    pageIsBusy: () => {
        document.getElementById("page-content").innerHTML = `
        <div  id="spinner-container">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        `
    }
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
    findPiece: () => {

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
    }
}

const data = {
    getCategories: async () => {
        try {
            return await axios.get(categoryURI.get)
        } catch (error) {
            console.error(error)
        }
    }
}


const italian = {
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
    findpiecePage: {
        header: "Ricerca vestito",
        
    }
}