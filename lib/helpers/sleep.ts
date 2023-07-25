/**
 * Resolve promise after sleeping for X ms.
 */
export function sleep(ms: number) {
    return new Promise<void>((resolve, reject) => {
        if (ms === 0) {
            setImmediate(resolve);
        } else {
            setTimeout(() => resolve(), ms);
        }
    });
}

export default sleep;