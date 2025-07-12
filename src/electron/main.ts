import {app, BrowserWindow, ipcMain} from 'electron';
import path from "path";
import { isDev } from "./util.js";
import { getPreloadPath } from './pathResolver.js';


app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        webPreferences:{
    
            preload: getPreloadPath(),
        },
        width: 400,
        height: 500,
        resizable: false,
        fullscreenable: false,
        titleBarStyle: "hidden",
        transparent: true,
        frame: false, 
        backgroundColor: "#00000000", 
        
        
        
    });
    if(isDev()){
        mainWindow.loadURL("http://localhost:5123/");
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }
    //once back end is ready, full screen window
    ipcMain.on("loading-complete", () => {
        if(!mainWindow){
            return;
        }
        mainWindow.setResizable(true);
        mainWindow.setSize(1920,1080);
        mainWindow.center();
    });
    
});