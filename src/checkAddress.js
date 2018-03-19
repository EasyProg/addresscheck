/**
 * Created by Михаил on 19.03.2018.
 */
/**
 * Created by Михаил on 17.03.2018.
 */
var keccak256 = require('js-sha3').keccak256;
export default function checkAddress(address) {
    let validity = 'false';
    if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        validity = 'true';
    } else {
        validity = isChecksumAddress(address);
    }
    return validity
}

var isChecksumAddress = function (address) {
    address = address.replace('0x','');
    var addressHash = keccak256(address.toLowerCase());

    for (var i = 0; i < 40; i++ ) {
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return 'false';
        }
    }
    return 'true';
};