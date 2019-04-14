"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rxjs_1 = require("rxjs");
class Logger extends rxjs_1.Observable {
    constructor(name, parent = null) {
        super();
        this.name = name;
        this.parent = parent;
        this._subject = new rxjs_1.Subject();
        const path = [];
        let p = parent;
        while (p) {
            path.push(p.name);
            p = p.parent;
        }
        this._metadata = { name, path };
        this._observable = this._subject.asObservable();
        if (this.parent && this.parent._subject) {
            // When the parent completes, complete us as well.
            this.parent._subject.subscribe(undefined, undefined, () => this.complete());
        }
    }
    get _observable() { return this._obs; }
    set _observable(v) {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._obs = v;
        if (this.parent) {
            this._subscription = this.subscribe((value) => {
                if (this.parent) {
                    this.parent._subject.next(value);
                }
            }, (error) => {
                if (this.parent) {
                    this.parent._subject.error(error);
                }
            }, () => {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                }
                this._subscription = null;
            });
        }
    }
    asApi() {
        return {
            createChild: (name) => this.createChild(name),
            log: (level, message, metadata) => {
                return this.log(level, message, metadata);
            },
            debug: (message, metadata) => this.debug(message, metadata),
            info: (message, metadata) => this.info(message, metadata),
            warn: (message, metadata) => this.warn(message, metadata),
            error: (message, metadata) => this.error(message, metadata),
            fatal: (message, metadata) => this.fatal(message, metadata),
        };
    }
    createChild(name) {
        return new this.constructor(name, this);
    }
    complete() {
        this._subject.complete();
    }
    log(level, message, metadata = {}) {
        const entry = Object.assign({}, this._metadata, metadata, {
            level, message, timestamp: +Date.now(),
        });
        this._subject.next(entry);
    }
    next(entry) {
        this._subject.next(entry);
    }
    debug(message, metadata = {}) {
        return this.log('debug', message, metadata);
    }
    info(message, metadata = {}) {
        return this.log('info', message, metadata);
    }
    warn(message, metadata = {}) {
        return this.log('warn', message, metadata);
    }
    error(message, metadata = {}) {
        return this.log('error', message, metadata);
    }
    fatal(message, metadata = {}) {
        return this.log('fatal', message, metadata);
    }
    toString() {
        return `<Logger(${this.name})>`;
    }
    lift(operator) {
        return this._observable.lift(operator);
    }
    subscribe(_observerOrNext, _error, _complete) {
        return this._observable.subscribe.apply(this._observable, arguments);
    }
    forEach(next, PromiseCtor) {
        return this._observable.forEach(next, PromiseCtor);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9jb3JlL3NyYy9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsK0JBQW9GO0FBMEJwRixNQUFhLE1BQU8sU0FBUSxpQkFBb0I7SUErQjlDLFlBQTRCLElBQVksRUFBa0IsU0FBd0IsSUFBSTtRQUNwRixLQUFLLEVBQUUsQ0FBQztRQURrQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQWtCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBOUJuRSxhQUFRLEdBQXNCLElBQUksY0FBTyxFQUFZLENBQUM7UUFpQ3ZFLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDZixPQUFPLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQztJQXZDRCxJQUFjLFdBQVcsS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELElBQWMs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QUNELE9BQU8sQ0FBQyxJQUErQixFQUFFLFdBQTRCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQXBIRCx3QkFvSEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvciwgUGFydGlhbE9ic2VydmVyLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpzb25PYmplY3QgfSBmcm9tICcuLi9qc29uL2ludGVyZmFjZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBMb2dnZXJNZXRhZGF0YSBleHRlbmRzIEpzb25PYmplY3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBMb2dFbnRyeSBleHRlbmRzIExvZ2dlck1ldGFkYXRhIHtcbiAgbGV2ZWw6IExvZ0xldmVsO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBMb2dnZXJBcGkge1xuICBjcmVhdGVDaGlsZChuYW1lOiBzdHJpbmcpOiBMb2dnZXI7XG4gIGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE/OiBKc29uT2JqZWN0KTogdm9pZDtcbiAgZGVidWcobWVzc2FnZTogc3RyaW5nLCBtZXRhZGF0YT86IEpzb25PYmplY3QpOiB2b2lkO1xuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE/OiBKc29uT2JqZWN0KTogdm9pZDtcbiAgd2FybihtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhPzogSnNvbk9iamVjdCk6IHZvaWQ7XG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE/OiBKc29uT2JqZWN0KTogdm9pZDtcbiAgZmF0YWwobWVzc2FnZTogc3RyaW5nLCBtZXRhZGF0YT86IEpzb25PYmplY3QpOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBMb2dMZXZlbCA9ICdkZWJ1ZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InIHwgJ2ZhdGFsJztcblxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgT2JzZXJ2YWJsZTxMb2dFbnRyeT4gaW1wbGVtZW50cyBMb2dnZXJBcGkge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3N1YmplY3Q6IFN1YmplY3Q8TG9nRW50cnk+ID0gbmV3IFN1YmplY3Q8TG9nRW50cnk+KCk7XG4gIHByb3RlY3RlZCBfbWV0YWRhdGE6IExvZ2dlck1ldGFkYXRhO1xuXG4gIHByaXZhdGUgX29iczogT2JzZXJ2YWJsZTxMb2dFbnRyeT47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBwcm90ZWN0ZWQgZ2V0IF9vYnNlcnZhYmxlKCkgeyByZXR1cm4gdGhpcy5fb2JzOyB9XG4gIHByb3RlY3RlZCBzZXQgX29ic2VydmFibGUodjogT2JzZXJ2YWJsZTxMb2dFbnRyeT4pIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fb2JzID0gdjtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlKCh2YWx1ZTogTG9nRW50cnkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuX3N1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuX3N1YmplY3QuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZywgcHVibGljIHJlYWRvbmx5IHBhcmVudDogTG9nZ2VyIHwgbnVsbCA9IG51bGwpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgcGF0aDogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgcCA9IHBhcmVudDtcbiAgICB3aGlsZSAocCkge1xuICAgICAgcGF0aC5wdXNoKHAubmFtZSk7XG4gICAgICBwID0gcC5wYXJlbnQ7XG4gICAgfVxuICAgIHRoaXMuX21ldGFkYXRhID0geyBuYW1lLCBwYXRoIH07XG4gICAgdGhpcy5fb2JzZXJ2YWJsZSA9IHRoaXMuX3N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Ll9zdWJqZWN0KSB7XG4gICAgICAvLyBXaGVuIHRoZSBwYXJlbnQgY29tcGxldGVzLCBjb21wbGV0ZSB1cyBhcyB3ZWxsLlxuICAgICAgdGhpcy5wYXJlbnQuX3N1YmplY3Quc3Vic2NyaWJlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAoKSA9PiB0aGlzLmNvbXBsZXRlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFzQXBpKCk6IExvZ2dlckFwaSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUNoaWxkOiAobmFtZTogc3RyaW5nKSA9PiB0aGlzLmNyZWF0ZUNoaWxkKG5hbWUpLFxuICAgICAgbG9nOiAobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhPzogSnNvbk9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UsIG1ldGFkYXRhKTtcbiAgICAgIH0sXG4gICAgICBkZWJ1ZzogKG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE/OiBKc29uT2JqZWN0KSA9PiB0aGlzLmRlYnVnKG1lc3NhZ2UsIG1ldGFkYXRhKSxcbiAgICAgIGluZm86IChtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhPzogSnNvbk9iamVjdCkgPT4gdGhpcy5pbmZvKG1lc3NhZ2UsIG1ldGFkYXRhKSxcbiAgICAgIHdhcm46IChtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhPzogSnNvbk9iamVjdCkgPT4gdGhpcy53YXJuKG1lc3NhZ2UsIG1ldGFkYXRhKSxcbiAgICAgIGVycm9yOiAobWVzc2FnZTogc3RyaW5nLCBtZXRhZGF0YT86IEpzb25PYmplY3QpID0+IHRoaXMuZXJyb3IobWVzc2FnZSwgbWV0YWRhdGEpLFxuICAgICAgZmF0YWw6IChtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhPzogSnNvbk9iamVjdCkgPT4gdGhpcy5mYXRhbChtZXNzYWdlLCBtZXRhZGF0YSksXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExvZ2dlcikobmFtZSwgdGhpcyk7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLl9zdWJqZWN0LmNvbXBsZXRlKCk7XG4gIH1cblxuICBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhOiBKc29uT2JqZWN0ID0ge30pOiB2b2lkIHtcbiAgICBjb25zdCBlbnRyeTogTG9nRW50cnkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9tZXRhZGF0YSwgbWV0YWRhdGEsIHtcbiAgICAgIGxldmVsLCBtZXNzYWdlLCB0aW1lc3RhbXA6ICtEYXRlLm5vdygpLFxuICAgIH0pO1xuICAgIHRoaXMuX3N1YmplY3QubmV4dChlbnRyeSk7XG4gIH1cbiAgbmV4dChlbnRyeTogTG9nRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJqZWN0Lm5leHQoZW50cnkpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZTogc3RyaW5nLCBtZXRhZGF0YTogSnNvbk9iamVjdCA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMubG9nKCdkZWJ1ZycsIG1lc3NhZ2UsIG1ldGFkYXRhKTtcbiAgfVxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE6IEpzb25PYmplY3QgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmxvZygnaW5mbycsIG1lc3NhZ2UsIG1ldGFkYXRhKTtcbiAgfVxuICB3YXJuKG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE6IEpzb25PYmplY3QgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmxvZygnd2FybicsIG1lc3NhZ2UsIG1ldGFkYXRhKTtcbiAgfVxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIG1ldGFkYXRhOiBKc29uT2JqZWN0ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5sb2coJ2Vycm9yJywgbWVzc2FnZSwgbWV0YWRhdGEpO1xuICB9XG4gIGZhdGFsKG1lc3NhZ2U6IHN0cmluZywgbWV0YWRhdGE6IEpzb25PYmplY3QgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmxvZygnZmF0YWwnLCBtZXNzYWdlLCBtZXRhZGF0YSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYDxMb2dnZXIoJHt0aGlzLm5hbWV9KT5gO1xuICB9XG5cbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8TG9nRW50cnksIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmFibGUubGlmdChvcGVyYXRvcik7XG4gIH1cblxuICBzdWJzY3JpYmUoKTogU3Vic2NyaXB0aW9uO1xuICBzdWJzY3JpYmUob2JzZXJ2ZXI6IFBhcnRpYWxPYnNlcnZlcjxMb2dFbnRyeT4pOiBTdWJzY3JpcHRpb247XG4gIHN1YnNjcmliZShuZXh0PzogKHZhbHVlOiBMb2dFbnRyeSkgPT4gdm9pZCwgZXJyb3I/OiAoZXJyb3I6IEVycm9yKSA9PiB2b2lkLFxuICAgICAgICAgICAgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogU3Vic2NyaXB0aW9uO1xuICBzdWJzY3JpYmUoX29ic2VydmVyT3JOZXh0PzogUGFydGlhbE9ic2VydmVyPExvZ0VudHJ5PiB8ICgodmFsdWU6IExvZ0VudHJ5KSA9PiB2b2lkKSxcbiAgICAgICAgICAgIF9lcnJvcj86IChlcnJvcjogRXJyb3IpID0+IHZvaWQsXG4gICAgICAgICAgICBfY29tcGxldGU/OiAoKSA9PiB2b2lkKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fb2JzZXJ2YWJsZS5zdWJzY3JpYmUuYXBwbHkodGhpcy5fb2JzZXJ2YWJsZSwgYXJndW1lbnRzKTtcbiAgfVxuICBmb3JFYWNoKG5leHQ6ICh2YWx1ZTogTG9nRW50cnkpID0+IHZvaWQsIFByb21pc2VDdG9yPzogdHlwZW9mIFByb21pc2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fb2JzZXJ2YWJsZS5mb3JFYWNoKG5leHQsIFByb21pc2VDdG9yKTtcbiAgfVxufVxuIl19