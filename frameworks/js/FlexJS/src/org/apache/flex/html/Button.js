/**
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('org.apache.flex.html.Button');

goog.require('org.apache.flex.core.UIBase');



/**
 * @constructor
 * @extends {org.apache.flex.core.UIBase}
 */
org.apache.flex.html.Button = function() {
  org.apache.flex.html.Button.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.Button,
    org.apache.flex.core.UIBase);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.Button.prototype.FLEXJS_CLASS_INFO =
    { names: [{ name: 'Button',
                qName: 'org.apache.flex.html.Button'}] };


/**
 * @override
 */
org.apache.flex.html.Button.prototype.createElement =
    function() {
  this.element = document.createElement('button');
  this.element.setAttribute('type', 'button');

  this.positioner = this.element;
  this.element.flexjs_wrapper = this;

  if (org.apache.flex.core.ValuesManager.valuesImpl.getValue) {
    var impl = org.apache.flex.core.ValuesManager.valuesImpl.
        getValue(this, 'iStatesImpl');
  }

  return this.element;
};


/**
 * @override
 * Buttons dispatch events off the element.
 */
org.apache.flex.html.Button.prototype.dispatchEvent =
    function(e) {
  if (this.element && typeof(e) != 'string')
    return this.element.dispatchEvent(e);
  return org.apache.flex.html.Button.base(this, 'dispatchEvent', e);
};

