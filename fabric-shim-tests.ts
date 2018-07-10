import * as shim from 'fabric-shim';
import { ChaincodeInterface, ChaincodeResponse, Stub } from 'fabric-shim';

class CC implements ChaincodeInterface {
    Init(stub: Stub): Promise<ChaincodeResponse> {
        throw new Error('Not implemented');
    }

    Invoke(stub: Stub): Promise<ChaincodeResponse> {
        throw new Error('Not implemented');
    }
}

shim.error();

shim.success();

shim.start(new CC());