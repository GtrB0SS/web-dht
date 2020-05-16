// Copyright 2020 Héctor Sánchez San Blas @ Hectorssb in GitHub 
// and Francisco Pinto Santos @ GandalFran in GitHub
// See LICENSE for details.

"use strict";

import { Log } from "./src/log"
import { Config } from "./src/config"
import { DHT } from "./src/models/dht";
import { DHTApplication } from "./src/app";
import { CrashGuard } from "./src/crashGuard";

// start crash guard
CrashGuard.start();

// set log level
Log.setLogLevel(Config.getInstance().log);

// start the DHT 
DHT.getInstance();

// start express application
DHTApplication.getInstance().start();

// register handler for exit and destroy dht
/*
process.on('exit', async function (){
	try{
		await DHT.getInstance().close();
	}catch(err){
		Log.info(`[DHT] the dht destroy doesn't gone properly good`);
	}
});
process.on('SIGINT', async function (){
	try{
		await DHT.getInstance().close();
	}catch(err){
		Log.info(`[DHT] the dht destroy doesn't gone properly good`);
	}
});
*/

/*
import * as FileSystem from "fs";
import { Chunk } from "./src/models/chunk";
import { FileBitTorrent, Torrent } from "./src/models/file";
import { Loads } from "./src/models/loads";


const fileName = 'video.mp4';

if(Config.getInstance().dht.idIface === 'wifi0'){

	setTimeout(async function(){
		const path:string = './test/' + fileName;
		let torrentFile: Torrent = null;
		
		try{
		    Log.debug(`Generating file ${path}`);
			const file:FileBitTorrent = FileBitTorrent.buildFromPath(path);
		    Log.debug(`Generating torrent for file ${path}`);
		    torrentFile = Torrent.buildTorrentFromRegularFile(file);

			Loads.getUploadsInstace().createUpload("1", torrentFile);
			await Loads.getUploadsInstace().wait("1");
			console.error(`status completed ${Loads.getUploadsInstace().statusUploads("1")}`)
			Loads.getUploadsInstace().delete("1");
		}catch(error){
			Log.error("[INDEX] buildTorrentFromFile", error);
		}
		
		FileSystem.renameSync(torrentFile.path, './test/prueba.torrent')		
	}, 5000)

}else{
	setTimeout(async function(){
		const torrentPath:string = './test/pruebaVideo.torrent';
		try{
		   	Log.debug(`Reading torreng from torrent file ${torrentPath}`);
		    const torrentFile2: Torrent = Torrent.buildTorrentFromTorrentFile(torrentPath);
			Loads.getDownloadsInstance().createDownload("2", torrentFile2);
			await Loads.getDownloadsInstance().wait("2");
			console.error(`status completed ${Loads.getDownloadsInstance().statusDownloads("2")}`)
			Loads.getDownloadsInstance().delete("2");
		}catch(error){
			Log.error("[INDEX] buildTorrentFromFile", error);
		}

	}, 1580000)
}*/