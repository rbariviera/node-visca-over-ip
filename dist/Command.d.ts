export declare class ViscaCommand {
    x: any;
    messageType: number;
    dataType: number;
    socket: number;
    data: number[];
    description: string;
    addedAt: number;
    events: {
        [key in ViscaCommandEventTypes]?: (...args: any[]) => void;
    };
    sentAt: number;
    constructor(settings: ViscaCommandSettings);
    on(eventType: ViscaCommandEventTypes, handler: (...args: any[]) => void): void;
    toPacket(): number[];
    _handle(eventType: ViscaCommandEventTypes, ...data: any[]): void;
    _hexify(data: number[]): string;
    _parsePacket(packet: number[]): void;
    static command(dataType: number, data: number[], description: string): ViscaCommand;
    static fromPacket(packet: number[]): ViscaCommand;
    static cameraCommand(data: number[], description: string): ViscaCommand;
    static operationCommand(data: number[], description: string): ViscaCommand;
    static cameraPower(state: boolean): ViscaCommand;
    static cameraPowerAutoOff(time?: number): ViscaCommand;
    static cameraPresetReset(preset?: number): ViscaCommand;
    static cameraPresetSet(preset?: number): ViscaCommand;
    static cameraPresetRecall(preset?: number): ViscaCommand;
    static cameraPanTilt(xSpeed: number, ySpeed: number, xMode: number, yMode: number): ViscaCommand;
    static cameraPanTiltDirect(xSpeed: number, ySpeed: number, x: number, y: number, relative?: boolean): ViscaCommand;
    static cameraPanTiltHome(): ViscaCommand;
    static cameraPanTiltReset(): ViscaCommand;
    static cameraPanTiltLimitSet(corner: number, x: number, y: number): ViscaCommand;
    static _cameraZoom(offinout: number, speed: number, description: string): ViscaCommand;
    static cameraZoomStop(): ViscaCommand;
    static cameraZoomIn(speed?: number): ViscaCommand;
    static cameraZoomOut(speed?: number): ViscaCommand;
    static cameraZoomDirect(zoomVal: number): ViscaCommand;
    static cameraDigitalZoom(enable?: boolean): ViscaCommand;
    static _cameraFocus(stopfarnear: number, speed: number, description: string): ViscaCommand;
    static cameraFocusStop(): ViscaCommand;
    static cameraFocusFar(speed?: number): ViscaCommand;
    static cameraFocusNear(speed?: number): ViscaCommand;
    static cameraFocusDirect(focusVal: number): ViscaCommand;
    static cameraFocusAuto(enable?: boolean): ViscaCommand;
    static cameraFocusAutoToggle(): ViscaCommand;
    static cameraFocusTrigger(): ViscaCommand;
    static cameraFocusInfinity(): ViscaCommand;
    static cameraFocusSetNearLimit(limit?: number): ViscaCommand;
    static cameraFocusAutoSensitivity(high?: boolean): ViscaCommand;
    static cameraFocusAutoMode(mode?: number): ViscaCommand;
    static cameraFocusAutoIntervalTime(movementTime?: number, intervalTime?: number): ViscaCommand;
    static cameraFocusIRCorrection(enable?: boolean): ViscaCommand;
    static cameraZoomFocus(zoomVal?: number, focusVal?: number): ViscaCommand;
    static cameraWBMode(mode?: number): ViscaCommand;
    static cameraWBTrigger(): ViscaCommand;
    static _cameraGain(mode: string, resetupdown: number, directvalue: number, description: string): ViscaCommand;
    static cameraGainUp(): ViscaCommand;
    static cameraGainDown(): ViscaCommand;
    static cameraGainReset(): ViscaCommand;
    static cameraGainDirect(value: number): ViscaCommand;
    static cameraGainRUp(): ViscaCommand;
    static cameraGainRDown(): ViscaCommand;
    static cameraGainRReset(): ViscaCommand;
    static cameraGainRDirect(value: number): ViscaCommand;
    static cameraGainBUp(): ViscaCommand;
    static cameraGainBDown(): ViscaCommand;
    static cameraGainBReset(): ViscaCommand;
    static cameraGainBDirect(value: number): ViscaCommand;
    static cameraGainLimit(value: number): ViscaCommand;
    static cameraExposureMode(mode?: number): ViscaCommand;
    static cameraExposureCompensationEnable(enable?: boolean): ViscaCommand;
    static _cameraExposureCompensationAdjust(resetupdown: number, description: string): ViscaCommand;
    static cameraExposureCompensationUp(): ViscaCommand;
    static cameraExposureCompensationDown(): ViscaCommand;
    static cameraExposureCompensationReset(): ViscaCommand;
    static cameraExposureCompensationDirect(directval?: number): ViscaCommand;
    static cameraBacklightCompensation(enable?: boolean): ViscaCommand;
    static _cameraShutter(resetupdown: number, directvalue: number, description: string): ViscaCommand;
    static cameraShutterUp(): ViscaCommand;
    static cameraShutterDown(): ViscaCommand;
    static cameraShutterReset(): ViscaCommand;
    static cameraShutterDirect(value?: number): ViscaCommand;
    static cameraShutterSlow(auto?: boolean): ViscaCommand;
    static _cameraIris(resetupdown: number, directvalue: number, description: string): ViscaCommand;
    static cameraIrisUp(): ViscaCommand;
    static cameraIrisDown(): ViscaCommand;
    static cameraIrisReset(): ViscaCommand;
    static cameraIrisDirect(value?: number): ViscaCommand;
    static _cameraAperture(resetupdown: number, directvalue: number, description: string): ViscaCommand;
    static cameraApertureUp(): ViscaCommand;
    static cameraApertureDown(): ViscaCommand;
    static cameraApertureReset(): ViscaCommand;
    static cameraApertureDirect(value?: number): ViscaCommand;
    static cameraHighResMode(enable?: boolean): ViscaCommand;
    static cameraHighSensitivityMode(enable?: boolean): ViscaCommand;
    static cameraNoiseReduction(val: number): ViscaCommand;
    static cameraGamma(val: number): ViscaCommand;
    static _cameraEffect(effectType: number, description: string): ViscaCommand;
    static _cameraEffectDigital(effectType: number, description: string): ViscaCommand;
    static cameraEffectDigitalIntensity(level: number): ViscaCommand;
    static cameraEffectOff(): ViscaCommand;
    static cameraEffectPastel(): ViscaCommand;
    static cameraEffectNegative(): ViscaCommand;
    static cameraEffectSepia(): ViscaCommand;
    static cameraEffectBW(): ViscaCommand;
    static cameraEffectSolar(): ViscaCommand;
    static cameraEffectMosaic(): ViscaCommand;
    static cameraEffectSlim(): ViscaCommand;
    static cameraEffectStretch(): ViscaCommand;
    static cameraEffectDigitalOff(): ViscaCommand;
    static cameraEffectDigitalStill(): ViscaCommand;
    static cameraEffectDigitalFlash(): ViscaCommand;
    static cameraEffectDigitalLumi(): ViscaCommand;
    static cameraEffectDigitalTrail(): ViscaCommand;
    static cameraFreeze(enable?: boolean): ViscaCommand;
    static cameraICR(enable?: boolean): ViscaCommand;
    static cameraICRAuto(enable?: boolean): ViscaCommand;
    static cameraICRAutoThreshold(val?: number): ViscaCommand;
    static cameraIDWrite(data: number): ViscaCommand;
    static cameraChromaSuppress(value: number): ViscaCommand;
    static cameraColorGain(value: number): ViscaCommand;
    static cameraColorHue(value: number): ViscaCommand;
}
declare type ViscaCommandEventTypes = 'error' | 'complete' | 'ack';
export interface ViscaCommandSettings {
    messageType?: number;
    dataType?: number;
    data?: number[];
    description?: string;
    onComplete?: () => void;
}
export {};
