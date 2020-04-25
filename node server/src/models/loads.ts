// Copyright 2020 Héctor Sánchez San Blas @ Hectorssb in GitHub 
// and Francisco Pinto Santos @ GandalFran in GitHub
// See LICENSE for details.

"use strict";

import * as OS from 'os';
import BittorrentDHT = require('bittorrent-dht');

import { Log } from '../log';
import { Config } from '../config';
import { Torrent } from '../models/file';

export class TorrentStatus{
	public status: any;
	public torrent: Torrent;
	public promise: Promise<any>;
}

export class Loads {

	private static uploadsInstance: Loads = null;
	private static downloadsInstance: Loads = null;


	public static getUploadsInstace(): Loads {
		if (! Loads.uploadsInstance) {
			Loads.uploadsInstance = new Loads();
        }
        return Loads.uploadsInstance;
	}

	public static getDownloadsInstance(): Loads {
		if (! Loads.downloadsInstance) {
			Loads.downloadsInstance = new Loads();
        }
        return Loads.downloadsInstance;
	}

	public model: {[id: string]: TorrentStatus } ;

	constructor(){
		this.model = {};
	}

	public startUpload(id:string, torrent: Torrent){
		const status: TorrentStatus = new TorrentStatus();
		status.torrent = torrent;
		status.promise = torrent.store();
		this.model[id] = status;
	}

	public deleteUpload(id:string){
		this.model[id] = null;
	}

	public getUpload(id:string): TorrentStatus{
		return this.model[id];
	}

	public startDownload(id:string, torrent: Torrent){
		const status: TorrentStatus = new TorrentStatus();
		status.torrent = torrent;
		status.promise = torrent.resolve();
		this.model[id] = status;
	}

	public deleteDownload(id:string){
		this.model[id] = null;
	}

	public getDownloadStatus(id:string): TorrentStatus{
		return this.model[id];
	}

}